// app/api/fortune/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { month, day, initials } = await req.json();

    if (!month || !day) {
      return NextResponse.json(
        { error: '생월과 생일이 필요해요.' },
        { status: 400 }
      );
    }

    // 프롬프트 구성
    const prompt = `
사용자의 생월: ${month}월
생일: ${day}일
이름 초성: ${initials || '없음'}

사용자의 생월과 초성을 참고해 
송송문구 스타일의 귀엽고 따뜻한 점괘 멘트를 2~3문장으로 만들어줘.

점괘는 "직업운(황감제), 대인운(고구려/붕어빵), 연애운(봄동신부), 재물운(부보상/토끼), 건강운(바캉스휴식)" 
이 5가지 중 하나의 기운을 중심으로 이어지게 구성해.

마지막 줄에는 반드시 아래 형식을 사용해줘:

"26년 당신에게 가장 좋은 기운: ○○운"

○○운에는 위 5가지 중 하나만 선택해서 넣어줘.
다른 문장은 마지막 줄 아래에 붙이지 마.
    `;

    // LLM 호출
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // 저렴 + 빠름
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
      }),
    });

    const result = await response.json();
    const text = result.choices?.[0]?.message?.content || '점괘 생성 실패';

    return NextResponse.json({ fortune: text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}
