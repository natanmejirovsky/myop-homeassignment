import { useState, useEffect } from 'react'
import { Grid2 } from '@mui/material';
import { TicketCard,  } from './TicketCard'
import { TicketDto } from '../types/ticket-dto';
import { useSearchParams} from 'react-router-dom'


const fetchTickets = async ({from , limit}: {from: number, limit: number}) => {
    const response = await fetch(`http://localhost:3000/tickets?from=${from}&limit=${limit}`);
    return await response.json();
}

function Tickets() {
    const [tickets, setTickets] = useState<TicketDto[]>([]);
    const [error, setError] = useState<string>('');
    const [currentFrom, setCurrentFrom] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        fetchTickets({from: currentFrom, limit}).then((data) => {
            setTickets([...tickets, ...data]);
        }).catch((err) => {
            setError(err);
        });
    }, [currentFrom, limit]);

    const handleScroll = () => {
        if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
            setCurrentFrom(currentFrom + limit);
        }
      };


    const ticketsToDisplay = tickets.map((ticket, index) => {
        const ticketCard = <TicketCard  ticket={ticket} />
        if(searchParams.get("userType") == 'local'){
            return (
                <Grid2 key={index} columns={1} container spacing={2} p={2}>
                    {ticketCard}
                </Grid2>
            )
        } else {
            return (
                <Grid2 key={index} columns={0} container spacing={0} p={0}>
                    {ticketCard}
                </Grid2>
            )
            
        }
    })

    return (
      <Grid2 container spacing={2} p={2}>
        {
            ticketsToDisplay
        }
      </Grid2>
    )
  }
  
  export default Tickets