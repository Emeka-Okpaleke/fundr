import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function Dashboard() {
  const revenueData = [
    { month: "Jan", value: 280 },
    { month: "Feb", value: 450 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 280 },
    { month: "May", value: 120 },
    { month: "Jun", value: 180 },
    { month: "Jul", value: 160 },
    { month: "Aug", value: 180 },
    { month: "Sep", value: 140 },
    { month: "Oct", value: 180 },
    { month: "Nov", value: 220 },
    { month: "Dec", value: 160 },
  ]

  const maxValue = Math.max(...revenueData.map((d) => d.value))

  return (
    <div className="flex h-screen bg-[#fbfbfb]">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[#fbfbfb]">
        <Header />

        {/* Content */}
        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl">
            {/* Page Title */}
            <div className="mb-6">
              <h1 className="text-xl font-medium text-[#2e2e2e] border-b-2 border-[#3976e8] pb-2 inline-block">
                Online Payments
              </h1>
            </div>

            {/* Account Details Card */}
            <Card className="mb-6 w-full md:max-w-sm bg-white border border-[#e4e4e7]">
              <CardContent className="p-4">
                <div className="text-xs text-[#8f8e8e] mb-1 font-medium">ACCOUNT DETAILS</div>
                <div className="text-xs text-[#71717a] mb-2 font-medium">STERLING BANK</div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-[#2e2e2e]">8000000000</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-[#ededf2] border-[#dadae7] text-[#9f56d4] hover:bg-[#dadae7] h-7 px-3 text-xs"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Section */}
            <div className="space-y-4">
              {/* Time Period Controls */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#71717a]">Showing data for</span>
                  <Select defaultValue="last7days">
                    <SelectTrigger className="w-32 h-8 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last7days">Last 7 days</SelectItem>
                      <SelectItem value="last30days">Last 30 days</SelectItem>
                      <SelectItem value="last90days">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-1 flex-wrap">
                  <Button variant="ghost" className="text-[#71717a] h-8 px-3 text-sm hover:bg-[#fafafa]">
                    Today
                  </Button>
                  <Button variant="ghost" className="text-[#71717a] h-8 px-3 text-sm hover:bg-[#fafafa]">
                    Last 7 days
                  </Button>
                  <Button variant="ghost" className="text-[#71717a] h-8 px-3 text-sm hover:bg-[#fafafa]">
                    Last 30 days
                  </Button>
                </div>
              </div>

              {/* Revenue Card */}
              <Card className="bg-white border border-[#e4e4e7]">
                <CardContent className="p-6">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#2e2e2e] font-medium text-sm">Revenue</span>
                      <span className="text-[#0cbc8b] text-sm font-medium">+0.00%</span>
                      <span className="text-[#71717a] text-sm">vs Last 7 days</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#2e2e2e]">₦0.00</span>
                      <span className="text-[#71717a] text-sm">in total value</span>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-48 flex flex-col justify-between text-xs text-[#71717a] -ml-10">
                      <span>500K</span>
                      <span>400K</span>
                      <span>300K</span>
                      <span>200K</span>
                      <span>100K</span>
                    </div>

                    {/* Horizontal grid lines */}
                    <div className="absolute left-0 top-0 w-full h-48 ml-4">
                      <div className="absolute top-0 left-0 right-0 h-px bg-[#f1f1f1]"></div>
                      <div className="absolute top-[20%] left-0 right-0 h-px bg-[#f1f1f1]"></div>
                      <div className="absolute top-[40%] left-0 right-0 h-px bg-[#f1f1f1]"></div>
                      <div className="absolute top-[60%] left-0 right-0 h-px bg-[#f1f1f1]"></div>
                      <div className="absolute top-[80%] left-0 right-0 h-px bg-[#f1f1f1]"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f1f1f1]"></div>
                    </div>

                    <div className="relative flex items-end justify-between h-48 ml-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                      {revenueData.map((data, index) => (
                        <div key={data.month} className="flex flex-col items-center gap-2">
                          <div
                            className="bg-[#ffc145] rounded-t-sm"
                            style={{
                              width: "24px",
                              height: `${Math.max((data.value / maxValue) * 180, 8)}px`,
                            }}
                          />
                          <span className="text-xs text-[#71717a] mt-1">{data.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
