import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from './dnd-react/container';
import { DndKitExample } from './dnd-kit/example';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div>
                <h2>react-dnd example</h2>
                <DndProvider backend={HTML5Backend}>
                    <Container />
                </DndProvider>
            </div>
            <div>
                <h2>dnd-kit example</h2>
                <DndKitExample />
            </div>
        </div>
    );
}
export default App;
