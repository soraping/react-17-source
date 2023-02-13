import React, { useState, useEffect, FunctionComponent, FC } from 'react';

interface IProps {
    title: string
}

const Header: FC<IProps> = (props) => {
    const [title, setTitle] = useState(props.title);
    return (
        <div>
            <h3>{title}</h3>
        </div>
      )
}

export default Header