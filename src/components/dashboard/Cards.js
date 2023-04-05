import React from 'react'
import './cards.css'

import { TfiWallet  } from 'react-icons/tfi';
import { CiUser  } from 'react-icons/ci';
import { BsFillPersonCheckFill  } from 'react-icons/bs';
import { RxCross1  } from 'react-icons/rx';
import { BiBarChartAlt  } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { BiBarChartSquare  } from 'react-icons/bi';

const Cards = () => {
    return <div className='grid'>
       
        
        <div className='flex-card cardborder rounded-2 '>
            <div className='icon-box'>
                <CiUser className='icon-card' />
            </div>
            <div className='cardtext'>
                <h4 className='card-h4 lead text-secondary'>Total Student</h4>
                <h2 className='card-h2'>2024</h2>
            </div>
        </div>
        <div className='flex-card cardborder rounded-2 '>
            <div className='icon-box'>
                <TfiWallet className='icon-card' />
            </div>
            <div className='cardtext'>
                <h4 className='card-h4 lead text-secondary'> Student Paid</h4>
                <h2 className='card-h2'>224</h2>
            </div>
        </div>
        <div className='flex-card cardborder rounded-2 '>
            <div className='icon-box'>
                <BsFillPersonCheckFill className='icon-card' />
            </div>
            <div className='cardtext'>
                <h4 className='card-h4 lead text-secondary'> Student Not Paid</h4>
                <h2 className='card-h2'>201</h2>
            </div>
        </div>
        <div className='flex-card cardborder rounded-2 '>
            <div className='icon-box'>
                <BsCheck2 className='icon-card' />
            </div>
            <div className='cardtext'>
                <h4 className='card-h4 lead text-secondary'>Arrears</h4>
                <h2 className='card-h2'>43</h2>
            </div>
        </div>
        <div className='flex-card cardborder rounded-2 '>
            <div className='icon-box'>
                <BsFillPersonCheckFill className='icon-card' />
            </div>
            <div className='cardtext'>
                <h4 className='card-h4 lead text-secondary'>Total Collections</h4>
                <h2 className='card-h2'>₦5432</h2>
            </div>
        </div>
        <div className='flex-card cardborder rounded-2 '>
            <div className='icon-box'>
                <BiBarChartSquare className='icon-card' />
            </div>
            <div className='cardtext'>
                <h4 className='card-h4 lead text-secondary'>Total Expected For Session</h4>
                <h2 className='card-h2'>₦5478</h2>
            </div>
        </div>
    </div>

}

export default Cards
