import Button from "@/app-layout/components/button/button"
import { QuillWrite02Icon } from "hugeicons-react"

const RegisterSection = () => {
    return (
        <div className="text-center mt-5">

            <p className="text-gray-500 mb-2">Belum memiliki Akun ?</p>
            <p className="text-gray-500 mb-10">
                Yuk, segera daftar di platform kami! Temukan kemudahan dan kecepatan dalam proses pengurusan visa Anda. Bergabunglah sekarang untuk merasakan pengalaman pengajuan visa yang praktis, aman, dan terpercaya!
            </p>

            <Button
                href="/register"
                className={`w-full ttnc-ButtonPrimary disabled:bg-opacity-70 bg-cyan-700 hover:bg-cyan-800 text-neutral-50`}
                icon={<QuillWrite02Icon />}
            >
                Register
            </Button>

        </div>
    )
}

export default RegisterSection