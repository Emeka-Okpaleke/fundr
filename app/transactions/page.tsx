import { Calendar, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function Transactions() {
  const transactions = [
    {
      account: "₦42,644",
      transactionId: "TR-8403857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
    {
      account: "₦25,471",
      transactionId: "TR-8403857902",
      type: "Withdrawal",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Failed",
    },
    {
      account: "₦42,644",
      transactionId: "TR-8403857902",
      type: "Deposit",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
    {
      account: "₦25,471",
      transactionId: "TR-8403857902",
      type: "Request",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Failed",
    },
    {
      account: "₦42,644",
      transactionId: "TR-8403857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
    {
      account: "₦25,471",
      transactionId: "TR-8403857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Failed",
    },
    {
      account: "₦26,648",
      transactionId: "TR-8403857902",
      type: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
  ]

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
          <div className="max-w-7xl">
            {/* Controls Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <Select defaultValue="all-accounts">
                <SelectTrigger className="w-40 h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-accounts">All Accounts</SelectItem>
                  <SelectItem value="sterling-bank">Sterling Bank</SelectItem>
                  <SelectItem value="access-bank">Access Bank</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-[#71717a]">
                  <span>Select Date Range:</span>
                  <Button variant="outline" className="h-9 px-3 text-sm border-[#e4e4e7] bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    June 6, 2023 - Jan 15, 2024
                  </Button>
                </div>

                <Button variant="outline" className="h-9 px-4 bg-white border-[#e4e4e7] text-[#71717a] hover:bg-gray-50">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Transactions Table */}
            <Card className="bg-white border border-[#e4e4e7]">
              <CardContent className="p-0">
                {/* Mobile view */}
                <div className="md:hidden">
                  {transactions.map((transaction, index) => (
                    <div key={index} className="border-b border-[#e4e4e7] p-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="font-semibold text-[#2e2e2e] text-base mb-1">{transaction.account}</div>
                          <div className="text-sm text-[#71717a] mb-1">{transaction.transactionId}</div>
                          <div className="text-sm text-[#71717a]">{transaction.type}</div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            transaction.status === "Processed"
                              ? "bg-[#5DC090]/10 border-[#5DC090] text-[#5DC090] text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5 ml-3"
                              : "bg-[#F14156]/10 border-[#F14156] text-[#F14156] text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5 ml-3"
                          }
                        >
                          <div className={
                            transaction.status === "Processed"
                              ? "w-2 h-2 rounded-full bg-[#5DC090]"
                              : "w-2 h-2 rounded-full bg-[#F14156]"
                          } />
                          {transaction.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-[#71717a]">
                        <span>{transaction.date}</span>
                        <span>{transaction.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Desktop view */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e4e4e7]">
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          <input type="checkbox" className="w-4 h-4 rounded border-[#e4e4e7]" />
                        </th>
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          ACCOUNT
                        </th>
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          TRANSACTION ID
                        </th>
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          TRANSACTION TYPE
                        </th>
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          DATE
                        </th>
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          TIME
                        </th>
                        <th className="text-left py-4 px-6 text-xs font-medium text-[#8f8e8e] uppercase tracking-wider">
                          STATUS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index} className="border-b border-[#e4e4e7] hover:bg-[#fafafa]">
                          <td className="py-4 px-6">
                            <input type="checkbox" className="w-4 h-4 rounded border-[#e4e4e7]" />
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-[#2e2e2e]">{transaction.account}</td>
                          <td className="py-4 px-6 text-sm text-[#71717a]">{transaction.transactionId}</td>
                          <td className="py-4 px-6 text-sm text-[#71717a]">{transaction.type}</td>
                          <td className="py-4 px-6 text-sm text-[#71717a]">{transaction.date}</td>
                          <td className="py-4 px-6 text-sm text-[#71717a]">{transaction.time}</td>
                          <td className="py-4 px-6">
                            <Badge
                              variant="outline"
                              className={
                                transaction.status === "Processed"
                                  ? "bg-[#5DC090]/10 border-[#5DC090] text-[#5DC090] text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5"
                                  : "bg-[#F14156]/10 border-[#F14156] text-[#F14156] text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5"
                              }
                            >
                              <div className={
                                transaction.status === "Processed"
                                  ? "w-2 h-2 rounded-full bg-[#5DC090]"
                                  : "w-2 h-2 rounded-full bg-[#F14156]"
                              } />
                              {transaction.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-[#e4e4e7]">
                  <div className="text-sm text-[#71717a]">Showing 8 of 20 results</div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-transparent">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-0 bg-[#3976e8] text-white border-[#3976e8]"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-transparent">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-transparent">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-transparent">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
