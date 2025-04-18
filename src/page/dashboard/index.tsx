import { observer } from "mobx-react-lite"
import PageLayout from "../../layout/page"
import DashboardPageController from "../../service/controller/page/dashboard"
import { LoadDialog } from "../../layout/components/load"
import BarData from "./components/bar"
import PieData from "./components/pie"
import { useEffect } from "react"

const controller = new DashboardPageController()

const DashboardPage = observer(() => {

    useEffect(() => {
        controller.getData()
    }, [])


    return (
        <>
            <PageLayout>
                <div className="flex flex-col bg-white pt-30 px-15 lg:px-32">
                    <h1 className="text-2xl font-bold mb-6 text-center text-black">
                        Perbandingan Harga Crypto: BTC vs ETH vs SOL
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BarData controller={controller} />
                        <PieData controller={controller} />
                    </div>
                </div>
            </PageLayout>
            <LoadDialog isOpen={controller.loadData} />
        </>
    )
})

export default DashboardPage