import { useState, useEffect } from 'react'
import { Grid2 } from '@mui/material';
import { TicketCard,  } from './TicketCard'
import { TicketDto } from '../types/ticket-dto';
import { useSearchParams} from 'react-router-dom'


const fetchTickets = async ({from , limit, userType}: {from: number, limit: number, userType: string}) => {
    const response = await fetch(`http://localhost:3000/tickets?userType=${userType}&from=${from}&limit=${limit}`);
    return await response.json();
}

function Tickets() {
    const [tickets, setTickets] = useState<TicketDto[]>([]);
    const [error, setError] = useState<string>('');
    const [currentFrom, setCurrentFrom] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [searchParams, setSearchParams] = useSearchParams();

 

    useEffect(() => {
        fetchTickets({from: currentFrom, limit, userType: (userType || 'local')}).then((data) => {
            setTickets(data);
        }).catch((err) => {
            setError(err);
        });
    }, [currentFrom, limit]);

    const userType = searchParams.get("userType");
    

    const ticketsToDisplay = tickets.map((ticket, index) => {
        const ticketCard = <TicketCard  ticket={ticket} />
        if(userType == 'local'){
            return (
                <Grid2 container spacing={2} p={2}>
                    <Grid2 key={index} columns={1} container spacing={2} p={2}>
                        {ticketCard}
                    </Grid2>
                </Grid2>
            )
        } else {
            return (
                <Grid2 key={index} columns={1} container spacing={0} p={0}>
                    {ticketCard}
                </Grid2>
            )
            
        }
    })

    return (
        <>
            <Grid2 container spacing={2} p={2}>
                <button onClick={() => setCurrentFrom(currentFrom - limit)} disabled={limit>currentFrom}>Prev page</button>
                <button onClick={() => setCurrentFrom(currentFrom + limit)}>Next page</button>
            </Grid2>
                
            {ticketsToDisplay}
        </>
    )
  }
  
  export default Tickets