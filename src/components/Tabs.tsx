import { useState } from 'react';

const Tabs = ({ elements }: { elements: Record<string, React.ReactNode> }) => {
    const [selected, setSelected] = useState(Object.keys(elements)[0]);
    return (
        <div className='text-sm font-medium text-center  text-gray-400 border-gray-700 bg-white grow m-4'>
            <ul className='flex flex-wrap -mb-px'>
                {Object.keys(elements).map((key, index) => {
                    const classesSelected =
                        'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500';
                    const classesNotSelected =
                        'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';
                    return (
                        <li
                            className='mr-2'
                            key={index}
                            onClick={() => {
                                setSelected(key);
                            }}
                        >
                            <a
                                href='#'
                                aria-current='page'
                                className={
                                    key == selected
                                        ? classesSelected
                                        : classesNotSelected
                                }
                            >
                                {key}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div>{elements && selected && elements[selected]}</div>
        </div>
    );
};

export default Tabs;
