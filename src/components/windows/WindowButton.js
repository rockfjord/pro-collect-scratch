import React from 'react'
import cn from 'classnames'
import Button from "../common/util/input/Button";

export default function WindowButton(
    {text, className, disabled, onClick, id}
) {
    return (
        <Button
            className={cn(
 
                className
            )}
            onClick={onClick}
            disabled={disabled}
            id={id}
        >
            {text}
        </Button>
    );
}