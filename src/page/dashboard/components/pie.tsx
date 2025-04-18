import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import DashboardPageController from "../../../service/controller/page/dashboard";
import { observer } from "mobx-react-lite";

const COLORS = ["#f59e0b", "#6366f1", "#10b981"];

type Props = {
    controller: DashboardPageController
}

const PieData = observer(({
    controller
}: Props) => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-black">Rata-Rata Harga Crypto (2025) (Pie)</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={controller.avgData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                        {
                            controller.avgData().map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
});

export default PieData