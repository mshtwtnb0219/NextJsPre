// server actionを使用したい場合は以下のディレクティブを記述する
'use server'
import { redirect } from "next/navigation"
import { ContactSchema } from "@/validations/contact"


// ActionStateの型定義
type ActionState = {
    success: boolean;
    errors: {
        name?: string[];
        email?: string[];
    };
    serverError?: string;
}


// FormData型はjavascriptでも良く使われる入力フォームで使用される際の型
export async function submitContactFomrm(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const name = formData.get('name')
    const email = formData.get('email')

    // バリデーション
    const validatationResult = ContactSchema.safeParse({ name, email })
    if (!validatationResult.success) {
        // エラー内容を見やすく
        const errors = validatationResult.error.flatten().fieldErrors
        console.log('サーバー側でエラーが発生', errors)
        return {
            success: false,
            errors: {
                name: errors.name || [],
                email: errors.email || []
            }
        }
    }
    // DB登録


    console.log('送信されたデータ', { name, email })
    redirect('/contacts/complete')
}