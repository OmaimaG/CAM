
import EnvBarChart from "../_components/env-bar-chart"
import Cards from "../_components/cards"
import ScanScarlet from "../_components/scan-scarlet"

export const metadata = {
  title: "Admin Dashboard",
}

export default async function DashboardPage() {
  return (
    <section className="grid gap-4">
        <Cards/>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <EnvBarChart/>
          <ScanScarlet/>
        </div>
    </section>
  )
}
