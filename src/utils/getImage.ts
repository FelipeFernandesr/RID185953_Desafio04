/**
 * Get the image from github
 * @returns The string from image repository
 */
export async function getImage(repoName: string): Promise<string> {
  const mainURL = `https://raw.githubusercontent.com/FelipeFernandesr/${repoName}/main/public/imgProject.PNG`
  const devURL = `https://raw.githubusercontent.com/FelipeFernandesr/${repoName}/dev/public/imgProject.PNG`

  try {
    const response = await fetch(mainURL, { method: 'HEAD' })
    if (response.ok) return mainURL

    const devResponse = await fetch(devURL, { method: 'HEAD' })
    if (devResponse.ok) return devURL
  } catch (error) {
    console.error('Erro ao buscar imagem do GitHub:', error)
  }

  // fallback
  return `https://raw.githubusercontent.com/FelipeFernandesr/${repoName}/main/public/imgProject.PNG`
}
