import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Views/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const PorDefecto: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'p-base border border-neutral-base rounded-sm',
    children: (
      <>
        <h3 className="c-h3"><a href="#" className="c-link">Título card</a></h3>
        <div className="prose max-w-none">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
      </>
    ),
  },
};

export const TodoElCardClicable: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'p-base border border-neutral-base rounded-sm relative hover:bg-neutral-light',
    children: (
      <>
        <h3 className="c-h3"><a href="#" className="c-link c-link--full">Título card</a></h3>
        <div className="prose max-w-none">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
      </>
    ),
  },
};

export const ConIcono: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'p-base border border-neutral-base rounded-sm',
    children: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" className="w-6 h-6 lg:w-9 lg:h-9 mt-base mb-lg" aria-hidden="true" focusable="false"><g transform="scale(2)"><path d="M21.71 5.71 16.29.29a1 1 0 0 0-.7-.29H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.41a1 1 0 0 0-.29-.7ZM20 21.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h10.25a.25.25 0 0 1 .25.25V5a2 2 0 0 0 2 2h2.75a.25.25 0 0 1 .25.25Z" fill="currentColor"></path><rect x="6.5" y="10.5" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="6.5" y="14" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="6.5" y="17.5" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="10.5" width="6.5" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="14" width="6.5" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="17.5" width="6.5" height="2" rx=".5" fill="currentColor"></rect></g></svg>
        <h3 id="titulo-card-1" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-1" aria-labelledby="boton-card-1 titulo-card-1" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};

export const SinBordesNiPaddingYConTodoElCardClicable: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'relative',
    children: (
      <>
        <h3 className="c-h3"><a href="#" className="c-link c-link--full">Título card</a></h3>
        <div className="prose max-w-none">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
      </>
    ),
  },
};

export const BarraLateralSimple: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'flex flex-col p-base bg-neutral-lighter border-t-8 border-neutral-dark',
    children: (
      <>
        <h3 id="titulo-card-2" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-2" aria-labelledby="boton-card-2 titulo-card-2" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};

export const ConSuper: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'flex flex-col p-base bg-neutral-lighter border-t-8 border-neutral-dark',
    superBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    superClasses: 'order-first h-60 -m-base mb-base bg-cover bg-center bg-no-repeat overflow-hidden',
    children: (
      <>
        <h3 id="titulo-card-3" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-3" aria-labelledby="boton-card-3 titulo-card-3" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};

export const ConSub: Story = {
  args: {
    className: 'lg:w-1/3',
    containerClasses: 'flex flex-col p-base bg-neutral-lighter border-t-8 border-neutral-dark',
    subBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    subClasses: 'h-60 -m-base mt-base bg-cover bg-center bg-no-repeat overflow-hidden',
    children: (
      <>
        <h3 id="titulo-card-4" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-4" aria-labelledby="boton-card-4 titulo-card-4" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};

export const ConImagenALaIzquierdaEnEscritorio: Story = {
  args: {
    className: 'lg:w-2/3',
    containerClasses: 'flex flex-col p-base bg-neutral-lighter border-t-8 border-neutral-dark',
    leftBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    leftClasses: 'hidden order-first lg:block w-1/2 -m-base mr-base bg-cover bg-center bg-no-repeat overflow-hidden',
    superBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    superClasses: 'lg:hidden order-first h-60 -m-base mb-base bg-cover bg-center bg-no-repeat overflow-hidden',
    children: (
      <>
        <h3 id="titulo-card-5" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-5" aria-labelledby="boton-card-5 titulo-card-5" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};

export const ConImagenALaDerechaEnEscritorio: Story = {
  args: {
    className: 'lg:w-2/3',
    containerClasses: 'flex flex-col p-base bg-neutral-lighter border-t-8 border-neutral-dark',
    rightBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    rightClasses: 'hidden lg:block w-1/2 -m-base ml-base bg-cover bg-center bg-no-repeat overflow-hidden',
    superBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    superClasses: 'lg:hidden order-first h-60 -m-base mb-base bg-cover bg-center bg-no-repeat overflow-hidden',
    children: (
      <>
        <h3 id="titulo-card-6" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-6" aria-labelledby="boton-card-6 titulo-card-6" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};

export const BloqueDePaginaDeInicioSinPadding: Story = {
  args: {
    className: 'lg:w-1/2',
    containerClasses: 'py-lg border-t-8 border-neutral-dark',
    children: (
      <>
        <h2 className="c-h1">Tus datos médicos e información personal</h2>
        <ul className="text-lg">
          <li className="mb-base"><a href="#" className="c-link">Cambiar tus datos de contacto</a></li>
          <li className="mb-base"><a href="#" className="c-link">Dónde y cómo solicitar tu PIN Salud</a></li>
          <li className="mb-base"><a href="#" className="c-link">Cómo solicitar un cambio de centro de salud</a></li>
          <li className="mb-base"><a href="#" className="c-link">Historia Clínica e informes médicos</a></li>
          <li className="mb-base"><a href="#" className="c-link">Derechos de protección de datos</a></li>
        </ul>
      </>
    ),
  },
};

export const BloqueDePaginaDeInicioConBotones: Story = {
  args: {
    containerClasses: 'flex flex-col p-lg bg-neutral-lighter border-t-8 border-neutral-dark',
    superBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.png&text=Imagen',
    superClasses: 'lg:hidden order-first h-72 -m-lg mb-base bg-cover bg-center bg-no-repeat overflow-hidden',
    rightBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    rightClasses: 'hidden lg:block w-1/2 h-96 -m-lg ml-xl bg-cover bg-center bg-no-repeat overflow-hidden',
    children: (
      <>
        <h2 className="c-h1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" className="inline-block align-middle lg:w-9 lg:h-9 mr-base" aria-hidden="true" focusable="false"><g transform="scale(2)"><path d="M21.71 5.71 16.29.29a1 1 0 0 0-.7-.29H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.41a1 1 0 0 0-.29-.7ZM20 21.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h10.25a.25.25 0 0 1 .25.25V5a2 2 0 0 0 2 2h2.75a.25.25 0 0 1 .25.25Z" fill="currentColor"></path><rect x="6.5" y="10.5" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="6.5" y="14" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="6.5" y="17.5" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="10.5" width="6.5" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="14" width="6.5" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="17.5" width="6.5" height="2" rx=".5" fill="currentColor"></rect></g></svg>
          Tu área personal
        </h2>
        <p className="c-paragraph-base mb-lg">En tu área personal puedes pedir cita con tu médico/a, consultar tu historia clínica y encontrar una selección de contenidos y servicios de salud para ti. Accede de forma segura desde cualquier lugar y en cualquier momento, desde tu móvil u ordenador.</p>
        <ul className="flex flex-wrap gap-base">
          <li>
            <a href="#" className="c-button c-button--primary">Acceder a Tu área personal</a>
          </li>
          <li>
            <a href="#" className="c-button">Descargar la app</a>
          </li>
        </ul>
      </>
    ),
  },
};

export const ItemsEnLista: Story = {
  args: {
    className: 'lg:w-3/4',
    containerClasses: 'flex flex-col p-lg bg-neutral-lighter',
    leftBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    leftClasses: 'hidden order-first lg:block w-72 -m-lg mr-lg bg-cover bg-center bg-no-repeat overflow-hidden',
    superBackgroundImageUrl: 'https://dummyimage.com/320x240/92949b/fff.jpg&text=Imagen',
    superClasses: 'lg:hidden order-first h-56 -m-lg mb-base bg-cover bg-center bg-no-repeat overflow-hidden',
    children: (
      <div className="flex flex-col">
        <h3 id="titulo-card-7" className="c-h3">Título de noticia</h3>
        <p className="order-first c-paragraph-sm mb-base">
          <svg viewBox="0 0 16 16" height="1em" width="1em" className="inline-block align-middle w-6 h-6 mr-xs" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fecha de publicación: "><path fillRule="evenodd" clipRule="evenodd" d="M11.4286 0C11.9019 0 12.2857 0.383755 12.2857 0.857143V1.71429H14C15.1046 1.71429 16 2.60971 16 3.71429V6.71526V8.14383V14C16 15.1046 15.1046 16 14 16H2C0.89543 16 0 15.1046 0 14V8.14383V6.71526V3.71429C0 2.60971 0.895431 1.71429 2 1.71429H3.71429V0.857143C3.71429 0.383755 4.09805 0 4.57143 0C5.04481 0 5.42857 0.383755 5.42857 0.857143V1.71429H10.5714V0.857143C10.5714 0.383755 10.9552 0 11.4286 0ZM3.71429 3.42857V4.28571C3.71429 4.7591 4.09805 5.14286 4.57143 5.14286C5.04481 5.14286 5.42857 4.7591 5.42857 4.28571V3.42857H10.5714V4.28571C10.5714 4.7591 10.9552 5.14286 11.4286 5.14286C11.9019 5.14286 12.2857 4.7591 12.2857 4.28571V3.42857H14C14.1578 3.42857 14.2857 3.55649 14.2857 3.71429V6.32171C14.1944 6.29822 14.0986 6.28571 14 6.28571H2C1.90134 6.28571 1.8056 6.29822 1.71429 6.32171V3.71429C1.71429 3.55649 1.84221 3.42857 2 3.42857H3.71429Z" fill="#1F2331"></path></svg>
          <strong>18 octubre 2022</strong>
        </p>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-7" aria-labelledby="boton-card-7 titulo-card-7" className="c-button c-button--transparent self-start">
          Ver detalle <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </div>
    ),
  },
};

export const BloqueMiniDePaginaDeInicioConIcono: Story = {
  args: {
    className: 'lg:w-1/4',
    containerClasses: 'p-base bg-neutral-lighter',
    children: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" className="w-6 h-6 lg:w-9 lg:h-9 mt-base mb-lg" aria-hidden="true" focusable="false"><g transform="scale(2)"><path d="M21.71 5.71 16.29.29a1 1 0 0 0-.7-.29H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.41a1 1 0 0 0-.29-.7ZM20 21.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h10.25a.25.25 0 0 1 .25.25V5a2 2 0 0 0 2 2h2.75a.25.25 0 0 1 .25.25Z" fill="currentColor"></path><rect x="6.5" y="10.5" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="6.5" y="14" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="6.5" y="17.5" width="3" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="10.5" width="6.5" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="14" width="6.5" height="2" rx=".5" fill="currentColor"></rect><rect x="11" y="17.5" width="6.5" height="2" rx=".5" fill="currentColor"></rect></g></svg>
        <h3 id="titulo-card-8" className="c-h3">Título card</h3>
        <div className="prose max-w-none mb-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit mollitia non deleniti illum iure pariatur vel eligendi praesentium in. Velit amet distinctio minima libero dolorem tempora non aliquid? Corporis.</p>
        </div>
        <a href="#" id="boton-card-8" aria-labelledby="boton-card-8 titulo-card-8" className="c-button c-button--transparent self-start">
          Más <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="self-center ml-2" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg>
        </a>
      </>
    ),
  },
};
