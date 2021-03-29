import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'sl-img-gallery',
  styleUrl: 'sl-img-gallery.css',
  shadow: true,
})
export class SlImgGallery {
  @State() imgPost: Array<ApiImg>;

  componentWillLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
      .then(res => (res.status === 200 ? res.json() : Promise.reject('api failed to fetch')))
      .then((res: Array<ApiImg>) => (this.imgPost = res))
      .catch(_ => (this.imgPost = [])); // ignore errors
  }

  render() {
    return (
      <Host>
        <h3>
          <slot></slot>
        </h3>
        <div class="sl-img-grid">{this.imgPost && this.imgPost.map(imgPost => <img src={imgPost.url} alt={imgPost.title} class="grow" />)}</div>
      </Host>
    );
  }
}

interface ApiImg {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
