import UserList from "./UserList";

// Örnek kullanım
const users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Ayşe", age: 30 },
  { id: 3, name: "Ahmet", age: 35 },
  { id: 4, name: "Busra", age: 35 },
  { id: 5, name: "Elif", age: 35 },
  { id: 6, name: "Ezgi", age: 35 },
  { id: 7, name: "Onur", age: 35 },
];

function UMemo() {
    return <UserList users={users} />;
}

export default UMemo;
