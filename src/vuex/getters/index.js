/**
 * Created by xingjiabin on 7/11/16.
 */
export function getPageType (state) {
  console.log(state.route);
  return state.route.pageType;
}
