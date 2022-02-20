import {Component, Input} from '@angular/core';
import {VacancyType} from "../../../assets/data/vacancy";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  isUploadFailed = true
  isLiked = false
  isApply = false
  isFavorite = false

  srcLiked=this.isLiked
    ?'assets/image/buttons/Icon-Dislike-Filled.png'
    :'assets/image/buttons/Icon-Dislike-Empty.png'

  srcFavorite=this.isFavorite
    ?'assets/image/buttons/Icon-Favorite-Star-Filled.png'
    :'assets/image/buttons/Icon-Favorite-Star-Empty.png'

  data: VacancyType | null = null

  @Input() set vacancy(vacancy: VacancyType) {
    this.data = vacancy
    this.isApply = vacancy.isApply
    this.isLiked=vacancy.isLiked
  }

  file: File | null = null



  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }

  isHot(hot: boolean): string {
    return hot ? 'Hot' : 'New'
  }

  dislike() {
    this.isLiked=!this.isLiked

  }

  favorite() {
    console.log(this.srcFavorite)
    this.srcFavorite
    //debugger
    this.isFavorite = !this.isFavorite
    console.log(this.srcFavorite)
  }

  uploader(e: any) {
    console.log(e)
    const file = e.item(0)
    console.log(file)

    //const client = new UploadClient({publicKey: '0e835cd0740edffd80c5'})
    /*  const file = e.target.files[0]
      const types = file.type.split('/')[0]
      console.log(file)
      if (file.size > 2000000) {
        //dispatch(actions.error(props.id, 'Ёлки-палки, этот файл просто огромный и не помещается в наш сервер'))
        //alert('File more than 2 MB' )
        return
      }
      if (types !== 'image') {
       // dispatch(actions.error(props.id, 'Error file,select an image'))
        // alert('Error file,select an image')
        return;
      }
      //dispatch(actions.addFile(props.id, `https://ucarecdn.com/${file.uuid}/`))

      client
        .uploadFile(file)
        .then(file => {
            alert('Your file uploaded successfully')
            dispatch(actions.respond(props.id))
            dispatch(actions.error(props.id, ''))
            dispatch(actions.addFile(props.id, `https://ucarecdn.com/${file.uuid}/`))
            alert(`https://ucarecdn.com/${file.uuid}/`)
          }
        )
        .catch(err => alert(err))
      dispatch(actions.addFile(props.id, `https://ucarecdn.com/${file.uuid}/`))*/
  }
}
