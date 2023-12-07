import React, { FC } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './droppable.module.scss';

interface DraggableProps {
    id: string;
    children: React.ReactNode;
}

export const Droppable: FC<DraggableProps> = function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });

    return (
        <div ref={setNodeRef} className={styles.root}>
            {props.children}
        </div>
    );
};
