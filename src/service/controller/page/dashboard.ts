import { makeAutoObservable } from "mobx";
import { ChartModel, ChartRawModel } from "../../model/response/chart";

class DashboardPageController {

    listData: ChartModel[] = []
    loadData: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    getData = () => {
        this.loadData = true

        this.listData = [
            { month: 'Jan 2023', BTC: 23000, ETH: 1600, SOL: 24 },
            { month: 'Feb 2023', BTC: 23500, ETH: 1650, SOL: 26 },
            { month: 'Mar 2023', BTC: 25000, ETH: 1700, SOL: 28 },
            { month: 'Apr 2023', BTC: 26500, ETH: 1800, SOL: 32 },
            { month: 'May 2023', BTC: 27000, ETH: 1850, SOL: 30 },
            { month: 'Jun 2023', BTC: 25500, ETH: 1750, SOL: 29 },
            { month: 'Jul 2023', BTC: 26000, ETH: 1780, SOL: 30 },
            { month: 'Aug 2023', BTC: 27500, ETH: 1900, SOL: 35 },
            { month: 'Sep 2023', BTC: 28500, ETH: 2000, SOL: 37 },
            { month: 'Oct 2023', BTC: 29000, ETH: 2100, SOL: 39 },
            { month: 'Nov 2023', BTC: 31000, ETH: 2200, SOL: 45 },
            { month: 'Dec 2023', BTC: 32000, ETH: 2300, SOL: 50 },

            { month: 'Jan 2024', BTC: 32500, ETH: 2350, SOL: 52 },
            { month: 'Feb 2024', BTC: 33000, ETH: 2400, SOL: 55 },
            { month: 'Mar 2024', BTC: 34500, ETH: 2500, SOL: 58 },
            { month: 'Apr 2024', BTC: 34000, ETH: 2450, SOL: 56 },
            { month: 'May 2024', BTC: 35000, ETH: 2550, SOL: 60 },
            { month: 'Jun 2024', BTC: 36000, ETH: 2650, SOL: 63 },
            { month: 'Jul 2024', BTC: 37000, ETH: 2700, SOL: 65 },
            { month: 'Aug 2024', BTC: 36500, ETH: 2680, SOL: 64 },
            { month: 'Sep 2024', BTC: 35500, ETH: 2600, SOL: 61 },
            { month: 'Oct 2024', BTC: 34500, ETH: 2550, SOL: 58 },
            { month: 'Nov 2024', BTC: 35500, ETH: 2600, SOL: 60 },
            { month: 'Dec 2024', BTC: 37000, ETH: 2750, SOL: 67 },

            { month: 'Jan 2025', BTC: 38000, ETH: 2800, SOL: 70 },
            { month: 'Feb 2025', BTC: 39000, ETH: 2900, SOL: 72 },
            { month: 'Mar 2025', BTC: 39500, ETH: 2950, SOL: 75 },
            { month: 'Apr 2025', BTC: 40000, ETH: 3000, SOL: 78 }
        ]

        this.loadData = false
    }

    avgData = (): ChartRawModel[] => {
        let listData: ChartRawModel[] = []

        const btc: ChartRawModel = {
            name: 'BTC',
            value: (this.listData.reduce((sum, item) => sum + (item?.BTC ?? 0), 0) / this.listData.length)
        }

        const eth: ChartRawModel = {
            name: 'ETH',
            value: (this.listData.reduce((sum, item) => sum + (item?.ETH ?? 0), 0) / this.listData.length)
        }

        const sol: ChartRawModel = {
            name: 'SOL',
            value: (this.listData.reduce((sum, item) => sum + (item?.SOL ?? 0), 0) / this.listData.length)
        }

        listData.push(btc)
        listData.push(eth)
        listData.push(sol)

        return listData
    }
}

export default DashboardPageController