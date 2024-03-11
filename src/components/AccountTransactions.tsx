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
      <div className="flex flex-col gap-4">
        {transactions.map((transaction, index) => (
          <Card key={`transaction_index_${index}`}>
            <CardHeader>
              <CardTitle>{transaction.product}</CardTitle>
              <CardDescription>
                {dateToShortDate(transaction.createdAt)}
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>

          // <div
          //   key={`transaction_index_${index}`}
          //   className="rounded-xl border-2 p-4"
          // >
          //   <span>{transaction.product}</span>
          //   <span>{dateToShortDate(transaction.createdAt)}</span>
          //   {/* Transaction */}
          // </div>
        ))}
      </div>
    </section>
  );
};
export default AccountTransactions;
