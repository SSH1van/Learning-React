import { Counters } from "./counters";
import { UsersList } from "./users-list";

export default function App() {
  return (
    <div className="container p-5 flex flex-col gap-5">
      <Counters />
      <UsersList />
    </div>
  );
}
