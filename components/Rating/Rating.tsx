import s from './Rating.module.css'
import cn from 'classnames'
import StarIcon from './star.svg'
import {DetailedHTMLProps, HTMLAttributes, KeyboardEvent, useEffect, useState} from 'react'

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean
    rating: number
    setRating?: (rating: number) => void
}

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRaring(rating)
    }, [rating])

    const constructRaring = (currentRating: number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i: number) => {
            return <span  className={cn(s.star,{[s.filled]: i < currentRating, [s.editable]: isEditable})}
                          onMouseEnter={() => changeDisplay(i+1)}
                          onMouseLeave={() => changeDisplay(rating)}
                          onClick={()=> onClick(i+1)}>
                <StarIcon

                    tabIndex={isEditable ? 0 : -1} //tabs, чтобы управлять сайтом клавиатурой
                    onKeyDown={(e: KeyboardEvent<SVGElement>)=> isEditable && handleSpace(i+1,e)}
                />
            </span>

        })
        setRatingArray(updatedArray)
    }
    const changeDisplay = (i: number) => {
        if (!isEditable){
            return
        }
        constructRaring(i)
    }
    const onClick = (i: number) => {
        if (!isEditable || !setRating){
            return
        }
        setRating(i)
    }

    const handleSpace = (i: number, e:KeyboardEvent<SVGElement>) => { //на нажатие на пробел
        if (e.code !== 'Space' || !setRating){
            return
        }
        setRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((r,i) => (<span key={i}>{r}</span>))}
        </div>
    )
}