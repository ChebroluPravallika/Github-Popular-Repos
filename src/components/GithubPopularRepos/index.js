import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    gitHubData: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.initial()
  }

  initial = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/popular-repos?language=ALL',
    )

    const data = await response.json()
    console.log(data.popular_repos)
    const array = data.popular_repos
    const formattedData = array.map(each => ({
      id: each.id,
      name: each.name,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    console.log(formattedData)
    this.setState(prevState => ({
      gitHubData: formattedData,
      isLoading: !prevState.isLoading,
    }))
  }

  onFilter = async id => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${id}`,
    )

    const data = await response.json()
    console.log(data.popular_repos)
    const array = data.popular_repos
    const formattedData = array.map(each => ({
      id: each.id,
      name: each.name,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    console.log(formattedData)
    this.setState({
      gitHubData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {gitHubData, isLoading} = this.state
    return (
      <div>
        <h1 style={{textAlign: 'center', fontFamily: 'Lobster'}}>Popular</h1>
        <ul className="buttons">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              eachItem={eachItem}
              key={eachItem.id}
              onFilter={this.onFilter}
            />
          ))}
        </ul>
        {isLoading && (
          <div
            testid="loader"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
        {!isLoading && (
          <ul
            style={{
              margin: '3%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {gitHubData.map(Item => (
              <RepositoryItem Item={Item} key={Item.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
