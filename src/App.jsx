import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper";
import AppRoutes from "./configs/route.config";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
      mutations: {
        // mutation options
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeWrapper>
        <AppRoutes />
      </ThemeWrapper>
    </QueryClientProvider>
  );
}

export default App;
