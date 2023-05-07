import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(list: any, searchText: any): any {
    console.log("list 1:", list)
    console.log("searchText 1:", searchText)
    let filteredList: any[] = [];
    console.log("filteredList 1:", filteredList)
    if(searchText == null || searchText == '') {
      return list;
    } else {
      filteredList = list.filter((item: any) => 
        {
          if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        }
      }
      );
      console.log("filteredList 2:", filteredList)
      return filteredList;
    }
  }
}