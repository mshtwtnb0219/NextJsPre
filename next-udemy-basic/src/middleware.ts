// ミドルウェア
// ページ表示する前に実行したい処理を記述　ファイル名は固定
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    if (!request.nextUrl.pathname.includes('.')) {
        console.log('ミドルウェアの確認')
    } return NextResponse.next() // リクエストを次の処理へ進める

}

// /blogのルーティングの場合のみにミドルウェア処理を実行する
export const config = {
    matcher:['/blog/:path*']
}