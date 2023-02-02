import React, { Component } from "react";
import NewsAtem from "./NewsAtem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSaze: 8,
    
  }
    
    capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
      super(props);
      this.state = {
        articles: [ ],
        loading: false,
        page:1,
        totalResults:0
      }
      document.title= `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }
 async updateNews(){
   this.props.setProgress(20);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa10b28af04b49ec81f88a51d60ad431&page=${this.state.page}&pageSize=${this.props.pazeSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({ 
     articles: parsedData.articles,
     totalResults: parsedData.totalResults,
     loading: false
    })
    this.props.setProgress(100)
 }
 async componentDidMount(){
     this.updateNews()
 }

 
 // handlePrevclick = async ()=>{
   //     this.setState({page: this.state.page - 1})
   //     this.updateNews()
   
//   }
  
//   handleNextclick = async ()=>{
//     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pazeSize))){
//         this.setState({page: this.state.page + 1})
//         this.updateNews()
// }}
fetchMoreData = async () => {  
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa10b28af04b49ec81f88a51d60ad431&page=${this.state.page + 1}&pageSize=${this.props.pazeSize}`;
  this.setState({page: this.state.page + 1})
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({ 
    articles: this.state.articles.concat(parsedData.articles) ,
    totalResults: parsedData.totalResults,
    loading: false
    })
  }
  render() {
    return (
      <>
        <h1 className="text-center" style={{margin: "20px" ,marginTop: '80px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
           <div className="container">
              <div className="row">
                  {this.state.articles.map((element) => {
                      return <div className="col-md-4" key={element.url}>
                          <NewsAtem title={element.title ? element.title : ""}  description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                      </div>
                  })}
              </div>
              </div>
    </InfiniteScroll>
            {/* <div className="container d-flex justify-content-around my-4">
            <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}> &larr; Previous</button>
            <button disabled = {(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pazeSize))}type="button" className="btn btn-dark" onClick={this.handleNextclick}> Next &rarr;</button>
            </div> */}
      </>
    );
  }
}
