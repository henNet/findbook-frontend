import { BooksProvider } from "./contexts/booksContexts";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <BooksProvider>
      <AppRoutes />
    </BooksProvider>
  )
}

export default App;
