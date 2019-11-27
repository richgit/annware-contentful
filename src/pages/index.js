import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import SimpleReactLightbox, {SRLWrapper} from "simple-react-lightbox";
import "./base.css"

class RootIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const piecesOfArt = get(this, 'props.data.allContentfulPieceOfArt.edges')

        return (
            <SimpleReactLightbox>
                <div id="wrapper">

                    <header id="header">
                        <h1><img src="aw_logo.png" alt=""/></h1>
                        {/*<nav>*/}
                        {/*    <ul>*/}
                        {/*        <li><a href="#footer" className="icon solid fa-info-circle">About</a></li>*/}
                        {/*    </ul>*/}
                        {/*</nav>*/}
                    </header>

                    <SRLWrapper>
                        <div id="main">

                            {piecesOfArt.map(({node, index}) => {
                                return (
                                    <article key={index} className="thumb">
                                        <a key={index} href={node.image.file.url} data-attribute="SRL">
                                            <img src={node.image.file.url} alt={node.image.title}/>
                                            {/*<Img alt={node.image.title} src={node.image.file.url} fluid={node.image.fluid} />*/}
                                        </a>
                                        <h2>{node.title}</h2>
                                        <p>{node.image.description}</p>
                                    </article>
                                )
                            })}
                        </div>
                    </SRLWrapper>
                    <footer id="footer" className="panel">
                        <div className="inner split">
                            <div>
                                <section>
                                    <h2>Magna feugiat sed adipiscing</h2>
                                    <p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque
                                        turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem
                                        et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla
                                        consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis
                                        ipsum.</p>
                                </section>
                                <section>
                                    <h2>Follow me on ...</h2>
                                    <ul className="icons">
                                        <li><a href="#" className="icon brands fa-twitter"><span
                                            className="label">Twitter</span></a></li>
                                        <li><a href="#" className="icon brands fa-facebook-f"><span
                                            className="label">Facebook</span></a></li>
                                        <li><a href="#" className="icon brands fa-instagram"><span
                                            className="label">Instagram</span></a></li>
                                        <li><a href="#" className="icon brands fa-github"><span
                                            className="label">GitHub</span></a></li>
                                        <li><a href="#" className="icon brands fa-dribbble"><span
                                            className="label">Dribbble</span></a></li>
                                        <li><a href="#" className="icon brands fa-linkedin-in"><span
                                            className="label">LinkedIn</span></a></li>
                                    </ul>
                                </section>
                            </div>

                        </div>
                    </footer>

                </div>
            </SimpleReactLightbox>
        )
    }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPieceOfArt {
      edges {
        node {
          title
          image {
            description
            title
            file {
              url
            }
            fluid(maxWidth: 350, maxHeight: 300, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
