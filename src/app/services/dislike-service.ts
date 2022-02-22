import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DislikeService {
  private readonly lsKey = 'blackList'

  private getBlackList(): number[] {
    return JSON.parse(localStorage.getItem(this.lsKey) || '[]')
  }

  public toggleDislike(id: number): void {
    // отправка в АПИ

    const presentIds = this.getBlackList()

    const newIds = presentIds.includes(id) ? presentIds.filter((_id: number) => _id !== id) : [...presentIds, id]

    localStorage.setItem(this.lsKey, JSON.stringify(newIds))
  }

  public checkIsDisliked(id: number): boolean {
    return this.getBlackList().includes(id)
  }
}
