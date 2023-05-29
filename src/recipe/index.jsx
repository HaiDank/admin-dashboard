import React, { useEffect, useState } from 'react'
import msConverter from '../utils/msConverter'
import ClockIcon from '../assets/ClockIcon'
import KnifeForkIcon from '../assets/KnifeForkIcon'
import LeafIcon from '../assets/LeafIcon'
import StarIcon from '../assets/StarIcon'
import ViewIcon from '../assets/ViewIcon'
import FilteringIcon from '../assets/FilteringIcon'
import HeartIcon from '../assets/HeartIcon'
import SearchingIcon from '../assets/SearchingIcon'
import XCircleIcon from '../assets/XCircleIcon'
import SideOptions from './SideOptions'
import RecipeFilter from './RecipeFilter'
import axios from 'axios'
const Recipe = () => {
  const [data, setData] = useState()

  useEffect(() => {
    // fetch('https://recipehub.herokuapp.com/api/v1/user/recipes', {
    //   headers: {'JWT' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTY4NDgzMDEzOSwiZXhwIjoxNjg0OTE2NTM5fQ.BMhN_6KHnyT36HE34txmS1pgRDTd9K-cQKeDbB1SwgQ'}
    // }).then(res => res.json()).then(data => {
    //   setData(data)
    // })
    axios.get('https://recipehub.herokuapp.com/api/v1/user/recipes', {
      headers: {
        'JWT': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTY4NDgzMDEzOSwiZXhwIjoxNjg0OTE2NTM5fQ.BMhN_6KHnyT36HE34txmS1pgRDTd9K-cQKeDbB1SwgQ',
      }
    }).then(response => setData(response))
  }, []);
  console.log(data);

  const [viewOption, setViewOption] = useState('list')
  const [showedFilter, setShowedFilter] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [searchResult, setSearchResult] = useState('')
  const [filter, setFilter] = useState({ sortingBy: '', isAscending: true, tags: [], ingredients: [], isFavourite: false })
  const isFiltering = filter.sortingBy || filter.tags.length || filter.ingredients.length || filter.isFavourite
  const searchByKeyword = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      setSearchResult(keyword)
    }
  }
  const dummyRecipes = [{
    imgUrl: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
    title: 'Pan Seared Steak',
    tags: ['breakfast', 'lunch', 'dinner'],
    prepTime: '00:05',
    cookTime: '00:10',
    recipeYield: '2 bowl',
    ingredients: ['steak', 'garlic', 'carrot'],
    rating: '4',
    isFavourite: true,
  }, {
    imgUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg',
    title: 'Crispy Fried Chicken',
    tags: ['appetizer', 'snack'],
    prepTime: '00:55',
    cookTime: '01:30',
    recipeYield: '4 disk',
    ingredients: ['chieck', 'crispy powder'],
    rating: '5',
    isFavourite: true
  }, {
    imgUrl: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
    title: 'Pan Seared Steak',
    tags: ['breakfast', 'lunch', 'dinner'],
    prepTime: '00:05',
    cookTime: '00:10',
    recipeYield: '2 bowl',
    ingredients: ['steak', 'garlic', 'carrot'],
    rating: '3',
    isFavourite: false,
  }, {
    imgUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg',
    title: 'Crispy Fried Chicken',
    tags: ['appetizer', 'snack'],
    prepTime: '00:55',
    cookTime: '01:30',
    recipeYield: '4 disk',
    ingredients: ['chieck', 'crispy powder'],
    rating: '0',
    isFavourite: true
  }, {
    imgUrl: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
    title: 'Pan Seared Steak',
    tags: ['breakfast', 'lunch', 'dinner'],
    prepTime: '00:05',
    cookTime: '00:10',
    recipeYield: '2 bowl',
    ingredients: ['steak', 'garlic', 'carrot'],
    rating: '2',
    isFavourite: true,
  }, {
    imgUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg',
    title: 'Crispy Fried Chicken',
    tags: ['appetizer', 'snack'],
    prepTime: '00:55',
    cookTime: '01:30',
    recipeYield: '4 disk',
    ingredients: ['chieck', 'crispy powder'],
    rating: '1',
    isFavourite: false
  }]


  const recipesElement = dummyRecipes.map(item => {
    const { imgUrl, title, tags, rating, prepTime, cookTime, recipeYield, ingredients, isFavourite } = item
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? true : false)
    }
    return (
      <div>
        {viewOption === 'list' &&
          <div className='flex items-center border-2 border-gray-400 rounded p-2 bg-gray-100 hover:border-green-accent cursor-pointer relative'>
            <img src={imgUrl} alt="" className='w-32 h-32 rounded' />
            <div className='flex flex-col ml-4 space-y-2'>
              <h1 className='text-xl font-bold text-green-accent'>{title}</h1>
              <div className='space-x-2'>
                <div className='flex space-x-1'>
                  {stars.map((star, i) => {
                    return <StarIcon key={i} style={`w-4 h-4 stroke-transparent ${star ? 'fill-orange-accent' : 'fill-gray-300 outline-none'}`} />
                  })}
                </div>
              </div>
              <div className='flex items-center space-x-4 font-medium'>
                <div className='flex items-center space-x-1'><ClockIcon style='w-6 h-6' /><span>{msConverter(300000)}</span></div>
                <div className='flex items-center space-x-0.5'><LeafIcon style='w-5 h-5 rotate-45' /><span>{ingredients.length}</span><span>Ingredients</span></div>
                <div className='flex items-center space-x-1'><KnifeForkIcon style='w-5 h-5' /><span>Yield: </span><span>{recipeYield}</span></div>
              </div>
              <div className='gap-2 py-1 flex flex-wrap'>
                {tags.map((tag) => {
                  return (
                    <span key={tag} className='border rounded-full py-0.5 px-3 border-green-variant'>
                      {tag}
                    </span>)
                })}
              </div>
            </div>
            {isFavourite && <HeartIcon style='w-6 h-6 absolute fill-red-500 stroke-red-100 left-3 top-3' />}
          </div>}

        {viewOption === 'gallery' &&
          <div className='w-68 h-80 flex flex-col border-2 border-gray-200 rounded px-2 py-2 space-y-1 bg-gray-100 hover:border-green-accent cursor-pointer relative'>
            <img src={imgUrl} alt="" className='w-full h-52 object-cover rounded' />
            <h1 className='text-xl font-bold text-green-accent pt-2'>{title}</h1>
            <div className='flex font-medium space-x-1'><ClockIcon style='w-6 h-6' /><span>{msConverter(300000)}</span></div>
            <div className='flex space-x-1'>
              {stars.map((star, i) => {
                return <StarIcon key={i} style={`w-4 h-4 stroke-transparent ${star ? 'fill-orange-accent' : 'fill-gray-300'}`} />
              })}
            </div>
            {isFavourite && <HeartIcon style='w-8 h-8 absolute fill-red-600 stroke-red-200 right-4 top-44' />}
          </div>}
      </div>)
  })
  return (
    <section className='flex justify-center  mx-8 gap-6'>
      <div className='max-w-8xl w-full flex space-x-8 rounded'>
        <div className='border-gray-400 py-4 rounded max-w-7xl w-full px-8 bg-gray-50'>
          <div className='select-none flex justify-between pb-2 border-b-2 border-green-accent text-green-accent'>
            <div className={`flex items-center rounded cursor-pointer p-2 hover:bg-gray-200 ${isFiltering && !showedFilter ? 'underline underline-offset-2' : ''}`}
              onClick={() => setShowedFilter(preState => !preState)}>
              <FilteringIcon style='w-6 h-6' />
              <span className='text-xl px-1 font-semibold'>Filter</span>
            </div>
            <div className='flex items-center border-2 border-green-accent rounded-xl cursor-pointer px-2 flex-1 max-w-[32rem]'>
              <label htmlFor='search'><SearchingIcon style='w-8 h-8 cursor-pointer' /></label>
              <input className='bg-transparent focus:outline-none rounded-full w-full text-lg p-2 text-black' placeholder='Search recipes' id='search' autoComplete='off'
                value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={searchByKeyword} />
              <button onClick={() => setKeyword('')}><XCircleIcon style='w-8 h-8 text-gray-500 hover:fill-gray-200' /></button>
            </div>
            <div className='hover:bg-gray-200 rounded cursor-pointer p-2 w-44 flex justify-center items-center'
              onClick={() => setViewOption(viewOption === 'list' ? 'gallery' : 'list')}>
              <span className='text-xl px-1 font-semibold'>{viewOption === 'list' ? "List View" : "Gallery View"}</span>
              <ViewIcon style='w-6 h-6' viewOption={viewOption} />
            </div>
          </div>
          {showedFilter && <RecipeFilter filter={filter} setFilter={setFilter} />}
          {searchResult && <div className='flex rounded p-2 '>
            <p className='font-semibold text-2xl'>Search result for "<span className='text-green-accent'>{searchResult}</span>"</p>
          </div>}
            {viewOption === 'list' && <div className='p-4 space-y-4'>{recipesElement}</div>}
            {viewOption === 'gallery' && <div className='p-4 flex flex-wrap gap-8'>{recipesElement}</div>}
        </div>
        <div className='w-88 pt-4'>
          <SideOptions />
        </div>
      </div>
    </section>
  )
}
export default Recipe