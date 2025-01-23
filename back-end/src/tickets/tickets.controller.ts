import { slice } from 'lodash'
import { Controller, Get, Query } from '@nestjs/common';
import { TicketDto } from './dto/ticket-dto';
import { tickets } from './tickets.data';
import { GetTicketsFilterDto } from './dto/get-tickets-filter-dto';
import { start } from 'repl';


@Controller('tickets')
export class TicketsController {
    @Get()
    getTickets(@Query() filterDto: GetTicketsFilterDto): Promise<TicketDto[]> {
        const filteredTickets: TicketDto[] = tickets.filter((ticket) => ticket.userType === filterDto.userType); 
        const resultTickets: TicketDto[] = slice(filteredTickets, filterDto.from, filterDto.from + filterDto.limit);
        return Promise.resolve(resultTickets);
    }
}
