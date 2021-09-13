import {
  Component, Prop, h,
} from '@stencil/core';

@Component({
  tag: 'call-action-component',
  styleUrl: 'call-action-component.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class CallActionComponent {
  @Prop() test: string;

  @Prop() active: boolean;

  private handleClick = () => {
    this.active = !this.active;
  }

  render() {
    return (
      <div>
        <div class="container">

          <h1 class="headline">CtA - Main Conversion</h1>
        </div>
        <div class="content">
          <div class="mainText container">
            <h2>A wonderful serenity has taken possession</h2>
            <p>
              A wonderful serenity has taken possession of my entire soul,
              like these sweet mornings of spring which I enjoy with my whole heart.
            </p>
            <button class="btn" onClick={this.handleClick}>Contact Us</button>

          </div>
          <div class="sidebar">
            <img src="https://www.stockvault.net/data/2016/03/23/189996/preview16.jpg" alt="" srcSet="" />
          </div>
        </div>

        <div class={this.active ? 'dropdown active' : 'dropdown'}>
          <div class="container">

            <h1>Contact Us</h1>
            <div class="close-btn" onClick={this.handleClick}>&times;</div>
          </div>
        </div>
      </div>
    );
  }
}
