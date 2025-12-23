import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'OPENAI_API_KEY가 없습니다.' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: '테스트야. 한 단어로 답해줘.' }],
        max_tokens: 10,
      }),
    });

    const result = await response.json();

    // 다양한 구조를 안전하게 읽기
    const text =
      result.choices?.[0]?.message?.content ||
      result.choices?.[0]?.message?.content?.[0]?.text ||
      JSON.stringify(result);

    return NextResponse.json({ ok: true, response: text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: 'OpenAI 호출 실패' },
      { status: 500 }
    );
  }
}
