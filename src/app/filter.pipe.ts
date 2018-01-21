import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], datesearch: string, teamsearch: string, scoresearch: string, marginsearch: number){
        if (items && items.length){
            return items.filter(item =>{
               
				if (datesearch && item.date.indexOf(datesearch) === -1){
                    return false;
                }
				
				if ((teamsearch && item.team1.name.toLowerCase().indexOf(teamsearch.toLowerCase()) === -1) &&  (teamsearch && item.team2.name.toLowerCase().indexOf(teamsearch.toLowerCase()) === -1)){
                    return false;
                }
                
                if ((scoresearch && item.score1!=scoresearch) && (scoresearch && item.score2!=scoresearch)){
                    return false;
                }
				
				if (marginsearch && (Math.abs(item.score1-item.score2))<marginsearch){
                    return false;
                }
				
                return true;
           })
        }
        else{
            return items;
        }
    }
}