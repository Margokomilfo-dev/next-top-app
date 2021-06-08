import {Htag, Ptag, Rating, Tag} from '../components'
import {Button} from '../components'
import {useState} from 'react'

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4)
    return (
        <div>
            <Htag tag="h1">text</Htag>
            <Button appearance={'primary'} arrow={'right'}>click me</Button>
            <Button appearance={'ghost'} arrow={'right'}>click me</Button>
            <Ptag size={'14px'}> маленький 14 </Ptag>
            <Ptag> средний 16 </Ptag>
            <Ptag size={'18px'}> большой 18 </Ptag>
            <Tag color={'ghost'}>маленький тег</Tag>
            <Tag color={'red'}>маленький тег</Tag>
            <Tag color={'grey'}>маленький тег</Tag>
            <Tag color={'green'}>маленький тег</Tag>
            <Tag color={'primary'}>маленький тег</Tag>
            <Tag size={'m'} color={'green'}>big тег</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </div>
    )
}
