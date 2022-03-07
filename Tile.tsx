//importing assets needed
import './Tile.css';
import '../Chessboard.tsx'


interface Props {
    image?: string;
    number: number
}
//default function of tile
export default function Tile({number, image}: Props){
    if(number %2 === 0)
    {
        return <div className="tile black-tile">
            {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}
            </div>
        
    }else
    {
        return <div className="tile white-tile">
            {image && <div style={{backgroundImage: `url(${image})`}} className="chess-piece"></div>}    
            </div>
    }
}