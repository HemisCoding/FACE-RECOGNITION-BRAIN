import React from 'react';


const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3 '>
<<<<<<< HEAD
                {`${name}, your current entry count is...`} 
=======
                { `${name}, your current entry count is... `}
>>>>>>> origin/main
            </div>
            <div className='white f1 '>
                {entries}
            </div>
        </div>
    )
}

export default Rank;