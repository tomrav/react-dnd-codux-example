import React, { useState } from 'react';
import { DndContext, Over, UniqueIdentifier } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import Example_module from './example.module.scss';

export const DndKitExample = function Example() {
    const [parent, setParent] = useState<UniqueIdentifier | null>(null);
    const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className={Example_module.root}>
                {!parent ? draggable : null}
                <Droppable id="droppable">
                    {parent === 'droppable' ? draggable : <h3>Drop here</h3>}
                </Droppable>
            </div>
        </DndContext>
    );

    function handleDragEnd({ over }: { over: Over | null }) {
        setParent(over ? over.id : null);
        return void 0;
    }
};
