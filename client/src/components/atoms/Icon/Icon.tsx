import React from 'react';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const icons = {
    trash: faTrashAlt,
    edit: faPen,
};

interface IconProps {
    type: 'trash' | 'edit';
}

const Icon: React.FC<IconProps> = ({ type }) => {
    return <FontAwesomeIcon icon={icons[type]} />;
};

export default Icon;
