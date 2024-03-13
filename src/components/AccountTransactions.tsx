import { DatabaseTransaction } from "@/lib/types";
import { dateToShortDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AccountTransactions = ({
  transactions,
}: {
  transactions: DatabaseTransaction[];
}) => {
  return (
    <section className="flex w-full flex-col gap-6">
      <h2 className="text-3xl font-extrabold">Transaction History</h2>
      <div className="flex flex-col gap-2">
        {transactions.map((transaction, index) => (
          <Card key={`transaction_index_${index}`} className="p-4">
            <CardHeader className="p-0">
              <CardTitle className="flex justify-between">
                {transaction.product}{" "}
                <span>${(transaction.amount / 100).toFixed(2)}</span>
              </CardTitle>
              <CardDescription>
                {dateToShortDate(transaction.createdAt)}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default AccountTransactions;
