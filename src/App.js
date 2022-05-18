import Directory from './components/directory/directory.component';
import categories from './components/directory/directory-menu.json';
const App = () => {
    return <Directory categories={categories} />;
};
export default App;
