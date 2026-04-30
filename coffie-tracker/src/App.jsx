
import Layout from './components/Layout'
import Hero from './components/Hero'
import CoffeeForm from './components/CoffeeForm'
import Stats from './components/Stats'
import History from './components/History'
import { useAuth } from './Context/AuthContext'

function App() {
  
  const { globalUser, globalData, isLoading } = useAuth(); 
 const isAuthenticated = globalUser
  //osea and global data length es mayor que 0 (!! transforms to boolean)
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  );

  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated} />
      {(isAuthenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  );
} 

export default App;


