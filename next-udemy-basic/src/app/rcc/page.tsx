'use client'
// こっちはRCCでリンクを作成したい場合
import { useRouter } from "next/navigation"
// ↓こっちの方が早い
import Link from "next/link"
import { useState } from "react"


export default function ClientComponent() {

    const [count, setCount] = useState(0)
    const router = useRouter()
    console.log('clinent')
    return (
        <div>
            Client
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <Link href="/about">About</Link>
            <button onClick={() => router.push('/about')}>About</button>
        </div>
    )
}
