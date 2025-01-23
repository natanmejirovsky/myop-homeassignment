import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography
  } from '@mui/material';
  import { TicketDto } from '../types/ticket-dto';

  export interface TicketCardProps {
    ticket: TicketDto
  }


    export const TicketCard = ({ ticket }: TicketCardProps) => {
        const { title, description, date, location } = ticket;
        return (
          <Card style={{ width: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {location}
                </Typography>
                
              </CardContent>
        </Card>
        );
    }