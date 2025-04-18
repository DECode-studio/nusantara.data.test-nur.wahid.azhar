import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from "recharts";
import DashboardPageController from "../../../service/controller/page/dashboard";
import { observer } from "mobx-react-lite";

type Props = {
    controller: DashboardPageController
}

const BarData = observer(({
    controller
}: Props) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-black">Harga Historis Crypto per Bulan (Bar)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={controller.listData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="BTC" fill="#f59e0b" />
          <Bar dataKey="ETH" fill="#6366f1" />
          <Bar dataKey="SOL" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
})

export default BarData