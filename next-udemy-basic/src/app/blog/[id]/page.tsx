// 動的ルーティング
//　フォルダ名は[]で作成　関数は非同期関数で作成
// 非同期処理はpromise型(非同期処理を安全に記載する)でジェネリクス型で抽象化

type Params = {
    params: Promise<{
        id: string
    }>
}

// 動的にメタデータする
export async function generateMetadata({ params }: Params) {
    const {id} = await params
    return {
        title : `ブログ記事ID ${id}`
    }
}

export default async function page({ params }: Params) {

    // console.log(params);
    const { id } = await params // 分割代入
    return (
        <div>
            ブログID：{id}
        </div>
    )
}
