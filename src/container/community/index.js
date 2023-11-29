import { createElement } from '../../script/layout'
import { createHeader } from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

const INFO__LIST = [
  {
    info: 'База знань',
    actived: false,
  },
  {
    info: 'Інформація',
    actived: true,
  },
]

const INFO = {
  img: '<img class="info__image" src="/img/img_community.png">',
  title: ' Що таке база знань?',
  text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
}

const createInfo = () => {
  const infoBlock = createElement('main', 'info__list')

  const infoChoose = createElement('div', 'info__choose')

  INFO__LIST.forEach((infoData) => {
    const infoChooseTab = createElement(
      'div',
      infoData.actived
        ? 'info__tab info__tab--active'
        : 'info__tab',
      infoData.info,
    )
    infoChoose.append(infoChooseTab)
  })

  infoBlock.append(infoChoose)

  const infoImage = INFO.img
  infoBlock.insertAdjacentHTML('beforeend', infoImage)

  const infoTitle = createElement(
    'div',
    'info__title',
    INFO.title,
  )

  const infoParagraph = createElement(
    'p',
    'info__text',
    INFO.text,
  )

  infoBlock.append(infoTitle, infoParagraph)

  const infoButton = createElement(
    'button',
    'info__button',
    "Перейти до ком'юніті у Телеграм",
  )

  infoBlock.append(infoButton)

  return infoBlock
}

const info = createInfo()
page.append(info)
