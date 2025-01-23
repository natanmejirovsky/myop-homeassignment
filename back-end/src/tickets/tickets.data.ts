import { v4 as uuid } from 'uuid';
import { TicketDto } from './dto/ticket-dto';


export const tickets = [
    {
        id: uuid(),
        title: 'Concert',
        description: 'Concert at the O2 Arena',
        date: new Date('2022-12-15T22:00:00Z'),
        location: 'O2 Arena',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Theatre',
        description: 'Theatre at the National Theatre',
        date: new Date('2022-12-16T19:30:00Z'),
        location: 'National Theatre',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Exhibition',
        description: 'Exhibition at the Tate Modern',
        date: new Date('2022-12-17T10:00:00Z'),
        location: 'Tate Modern',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Museum',
        description: 'Museum at the British Museum',
        date: new Date('2022-12-18T10:00:00Z'),
        location: 'British Museum',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cinema',
        description: 'Cinema at the BFI IMAX',
        date: new Date('2022-12-19T20:00:00Z'),
        location: 'BFI IMAX',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Comedy',
        description: 'Comedy at the Comedy Store',
        date: new Date('2022-12-20T19:30:00Z'),
        location: 'Comedy Store',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Dance',
        description: 'Dance at Sadler\'s Wells',
        date: new Date('2022-12-21T19:30:00Z'),
        location: 'Sadler\'s Wells',   
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Opera',
        description: 'Opera at the Royal Opera House',
        date: new Date('2022-12-22T19:30:00Z'),
        location: 'Royal Opera House',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Ballet',
        description: 'Ballet at the Royal Albert Hall',
        date: new Date('2022-12-23T19:30:00Z'),
        location: 'Royal Albert Hall',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Musical',
        description: 'Musical at the London Palladium',
        date: new Date('2022-12-24T19:30:00Z'),
        location: 'London Palladium',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Festival',
        description: 'Festival at the Southbank Centre',
        date: new Date('2022-12-25T10:00:00Z'),
        location: 'Southbank',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Circus',
        description: 'Circus at the Roundhouse',
        date: new Date('2022-12-26T19:30:00Z'),
        location: 'Roundhouse',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cabaret',
        description: 'Cabaret at the Cafe de Paris',
        date: new Date('2022-12-27T19:30:00Z'),
        location: 'Cafe de Paris',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Magic',
        description: 'Magic at the Magic Circle',
        date: new Date('2022-12-28T19:30:00Z'),
        location: 'Magic Circle',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Pantomime',
        description: 'Pantomime at the Hackney Empire',
        date: new Date('2022-12-29T19:30:00Z'),
        location: 'Hackney Empire',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Puppetry',
        description: 'Puppetry at the Little Angel Theatre',
        date: new Date('2022-12-30T19:30:00Z'),
        location: 'Little Angel Theatre',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Street Performance',
        description: 'Street Performance at Covent Garden',
        date: new Date('2022-12-31T19:30:00Z'),
        location: 'Covent Garden',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Carnival',
        description: 'Carnival at the Notting Hill Carnival',
        date: new Date('2023-01-01T10:00:00Z'),
        location: 'Notting Hill',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Parade',
        description: 'Parade at the Lord Mayor\'s Show',
        date: new Date('2023-01-02T10:00:00Z'),
        location: 'Lord Mayor\'s Show',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Fireworks',
        description: 'Fireworks at the London Eye',
        date: new Date('2023-01-03T20:00:00Z'),
        location: 'London Eye',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Light Show',
        description: 'Light Show at Kew Gardens',
        date: new Date('2023-01-04T18:00:00Z'),
        location: 'Kew Gardens',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Ice Skating',
        description: 'Ice Skating at Somerset House',
        date: new Date('2023-01-05T19:30:00Z'),
        location: 'Somerset House',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Christmas Market',
        description: 'Christmas Market at Winter Wonderland',
        date: new Date('2023-01-06T10:00:00Z'),
        location: 'Winter Wonderland',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Food Festival',
        description: 'Food Festival at Taste of London',
        date: new Date('2023-01-07T10:00:00Z'),
        location: 'Taste of London',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Festival',
        description: 'Beer Festival at the Great British Beer Festival',
        date: new Date('2023-01-08T10:00:00Z'),
        location: 'Great British Beer Festival',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Vinopolis',
        date: new Date('2023-01-09T19:30:00Z'),
        location: 'Vinopolis',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Whisky Tasting',
        description: 'Whisky Tasting at the Whisky Exchange',
        date: new Date('2023-01-10T19:30:00Z'),
        location: 'Whisky Exchange',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-01-11T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-01-12T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-01-13T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-01-14T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-01-15T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-01-16T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-01-17T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-01-18T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-01-19T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-01-20T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-01-21T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-01-22T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-01-23T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-01-24T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-01-25T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-01-26T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-01-27T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-01-28T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-01-29T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-01-30T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-01-31T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-02-01T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-02-02T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-02-03T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-02-04T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-02-05T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-02-06T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-02-07T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-02-08T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-02-09T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-02-10T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-02-11T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-02-12T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-02-13T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-02-14T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-02-15T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-02-16T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-02-17T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-02-18T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-02-19T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-02-20T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-02-21T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local' 
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-02-22T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-02-23T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-02-24T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist' 
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-02-25T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'   
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-02-26T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-02-27T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'   
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-02-28T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-03-01T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-03-02T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-03-03T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-03-04T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-03-05T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-03-06T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-03-07T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-03-08T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-03-09T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-03-10T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-03-11T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Cocktail Making',
        description: 'Cocktail Making at the London Cocktail Club',
        date: new Date('2023-03-12T19:30:00Z'),
        location: 'London Cocktail Club',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cooking Class',
        description: 'Cooking Class at the Jamie Oliver Cookery School',
        date: new Date('2023-03-13T19:30:00Z'),
        location: 'Jamie Oliver Cookery School',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Baking Class',
        description: 'Baking Class at the Bread Ahead Bakery',
        date: new Date('2023-03-14T19:30:00Z'),
        location: 'Bread Ahead Bakery',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Cheese Tasting',
        description: 'Cheese Tasting at Neal\'s Yard Dairy',
        date: new Date('2023-03-15T19:30:00Z'),
        location: 'Neal\'s Yard Dairy',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Chocolate Making',
        description: 'Chocolate Making at My Chocolate',
        date: new Date('2023-03-16T19:30:00Z'),
        location: 'My Chocolate',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Tea Tasting',
        description: 'Tea Tasting at the Twinings Tea Shop',
        date: new Date('2023-03-17T19:30:00Z'),
        location: 'Twinings Tea Shop',
        userType: 'local'   
    },
    {
        id: uuid(),
        title: 'Coffee Tasting',
        description: 'Coffee Tasting at the Monmouth Coffee Company',
        date: new Date('2023-03-18T19:30:00Z'),
        location: 'Monmouth Coffee Company',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Beer Tasting',
        description: 'Beer Tasting at the Kernel Brewery',
        date: new Date('2023-03-19T19:30:00Z'),
        location: 'Kernel Brewery',
        userType: 'local'
    },
    {
        id: uuid(),
        title: 'Wine Tasting',
        description: 'Wine Tasting at Berry Bros. & Rudd',
        date: new Date('2023-03-20T19:30:00Z'),
        location: 'Berry Bros. & Rudd',
        userType: 'tourist'
    },
    {
        id: uuid(),
        title: 'Gin Tasting',
        description: 'Gin Tasting at the City of London Distillery',
        date: new Date('2023-03-21T19:30:00Z'),
        location: 'City of London Distillery',
        userType: 'local' 
    }
] as TicketDto[];